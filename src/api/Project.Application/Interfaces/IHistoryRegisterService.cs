using Project.Application.DTOs;

namespace Project.Application.Interfaces;

public interface IHistoryRegisterService
{
    public void AddHistoryByCode(string code, HistoryRegisterDTO dto);
}