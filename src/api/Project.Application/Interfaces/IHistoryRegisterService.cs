using Project.Application.DTOs;
using Project.Domain;

namespace Project.Application.Interfaces;

public interface IHistoryRegisterService
{
    void AddHistoryByCode(HistoryRegisterCreateDTO createDto);
    void DeleteHistoryById(int id);
    void UpdateHistory(HistoryRegisterUpdateDTO dto);
    HistoryDTO ListHistories(int projectId);
}