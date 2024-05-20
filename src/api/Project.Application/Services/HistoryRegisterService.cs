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
        
    public void AddHistoryByCode(string code, HistoryRegisterDTO dto)
    {
        var project = GetProjectByCode(code);

        if (project is null)
            throw new Exception($"Projeto não encontrado {code}");

        var history = new HistoryRegister()
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
    
    private Domain.Project? GetProjectByCode(string code)
    {
        return _context.Project.FirstOrDefault(x => x.Code == code);
    }
}