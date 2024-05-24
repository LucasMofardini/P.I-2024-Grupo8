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
        
    public void AddHistoryByCode(HistoryRegisterDTO dto)
    {
        var project = GetProjectByCode(dto.ProjectCode);

        if (project is null)
            throw new Exception($"Projeto não encontrado {dto.ProjectCode}");

        var history = new HistoryRegister
        {
            ProjectId = project.Id,
            Amount = dto.Amount,
            Date = dto.Date, 
            Description = dto.Description,
            CategoryId = dto.CategoryId,
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

    private Domain.Project? GetProjectByCode(string code)
    {
        return _context.Project.FirstOrDefault(x => x.Code == code);
    }
    
    private HistoryRegister? GetHistoryById(int id)
    {
        return _context.HistoryRegister.FirstOrDefault(x => x.Id == id);
    }
}