using Microsoft.VisualBasic.CompilerServices;
using Project.Application.DTOs;
using Project.Application.Interfaces;
using Project.Domain;
using Project.Infrastructure.Data;
using Project.Utils;

namespace Project.Application.Services;

public class HistoryRegisterService : IHistoryRegisterService
{
    private readonly Context _context;
    
    public HistoryRegisterService(Context context)
    {
        _context = context;
    }
        
    public void AddHistoryByCode(HistoryRegisterCreateDTO createDto)
    {
        var project = GetProjectByCode(createDto.ProjectCode);

        if (project is null)
            throw new Exception($"Projeto não encontrado {createDto.ProjectCode}");

        var history = new HistoryRegister
        {
            ProjectId = project.Id,
            Amount = createDto.Amount,
            Date = createDto.Date, 
            Description = createDto.Description,
            CategoryId = createDto.CategoryId,
            LastUpdatedDateTime = TimeUtils.GetBrazilianUtcNow()
        };
        
        _context.HistoryRegister.Add(history);
        _context.SaveChanges();
    }

    public void DeleteHistoryById(int id)
    {
        var history = GetHistoryById(id);
        
        if (history is null)
            throw new Exception($"Historico não encontrado | History Id: {id}");
        
        _context.HistoryRegister.Remove(history);
        _context.SaveChanges();
    }

    public void UpdateHistory(HistoryRegisterUpdateDTO dto)
    {
        var history = GetHistoryById(dto.Id);

        if (history is null)
            throw new Exception("Historico não encontrado");
        
        _context.HistoryRegister.Update(new HistoryRegister()
        {
            Id = dto.Id,
            Amount = dto.Amount,
            Date = dto.Date,
            Description = dto.Description,
            CategoryId = dto.CategoryId,
            ProjectId = dto.ProjectId,
            LastUpdatedDateTime = TimeUtils.GetBrazilianUtcNow()
        });

        _context.SaveChanges();
    }

    public HistoryDTO ListHistories(int projectId)
    {
        var histories= _context.HistoryRegister.Where(x => x.ProjectId == projectId).ToList();

        if (!histories.Any())
            return new HistoryDTO();

        var project = GetProjectById(projectId);

        if (project is null)
            return new HistoryDTO();
        
        var groupedByMonth = histories.GroupBy(x => x.Date.Month).ToList();

        var historyBalances = new List<HistoryBalance>();

        var projectBalance = project.Budget;
            
        foreach (var history in groupedByMonth.OrderBy(x => x.Key))
        {
            var amount = history.Sum(x => x.Amount);
            var balance = projectBalance - amount;

            projectBalance = balance;
                          
            historyBalances.Add(new HistoryBalance()
            {
                Amount = amount,
                Balance = balance,
                Month = history.Key
            });
        }
        
        var historiesDescending = histories.OrderByDescending(x => x.Date);
        
        var dto = new HistoryDTO();

        dto.HistoryItems = historiesDescending.ToList();
        dto.HistoriesBalance = historyBalances;
        dto.FinalBalance = projectBalance;

        return dto;
    }

    private Domain.Project? GetProjectByCode(string code)
    {
        return _context.Project.FirstOrDefault(x => x.Code == code);
    }
    
    private Domain.Project? GetProjectById(int id)
    {
        return _context.Project.FirstOrDefault(x => x.Id == id);
    }
    
    private HistoryRegister? GetHistoryById(int id)
    {
        return _context.HistoryRegister.FirstOrDefault(x => x.Id == id);
    }
}