namespace Project.Application.DTOs;

public class HistoryRegisterDTO
{
    public string ProjectCode { get; set; }
    public int? CategoryId { get; set; }
    public string Description { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
}