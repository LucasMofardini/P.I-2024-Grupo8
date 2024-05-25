using Project.Domain;

namespace Project.Application.DTOs;

public class HistoryDTO
{
    public List<HistoryRegister> HistoryItems { get; set; }
    public List<HistoryBalance> HistoriesBalance { get; set; }
    
    public decimal FinalBalance { get; set; }
}

public class HistoryBalance
{
    public int Month { get; set; }
    public decimal Amount { get; set; }
    public decimal Balance { get; set; }
}