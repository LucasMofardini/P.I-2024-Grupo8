using Project.Application.DTOs;

namespace Project.Application.Interfaces;

public interface IHistoryRegisterService
{
    void AddHistoryByCode(HistoryRegisterDTO dto);
    void DeleteHistoryById(int id);
    void UpdateHistory(HistoryRegisterUpdateDTO dto);
}