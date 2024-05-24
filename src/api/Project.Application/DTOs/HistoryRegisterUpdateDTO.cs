namespace Project.Application.DTOs;

public class HistoryRegisterUpdateDTO
{
    public int Id { get; set; }
    public int ProjectId { get; set; }
    public int? CategoryId { get; set; }
    public string Description { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
}