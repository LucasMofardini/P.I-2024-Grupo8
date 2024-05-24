using Microsoft.AspNetCore.Mvc;
using Project.Application.DTOs;
using Project.Application.Interfaces;

namespace Project.API.Controllers;

[ApiController]
[Route("[controller]")]
public class HistoryRegisterController : ControllerBase
{
    private readonly IHistoryRegisterService _historyRegisterService;
    
    public HistoryRegisterController(IHistoryRegisterService historyRegisterService)
    {
        _historyRegisterService = historyRegisterService;
    }

    [HttpPost(Name = "AddHistoryByProjectId")]
    public IActionResult AddHistoryByCode([FromBody] HistoryRegisterDTO dto)
    {
        try
        {
            _historyRegisterService.AddHistoryByCode(dto);
            
            return Ok("Histórico adicionado com sucesso");
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
    
    [HttpDelete(Name = "DeleteHistoryByCode")]
    public IActionResult DeleteHistoryByCode([FromQuery] int historyId)
    {
        try
        {
            _historyRegisterService.DeleteHistoryById(historyId);
            
            return Ok("Histórico adicionado com sucesso");
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
    
    [HttpPut(Name = "UpdateHistory")]
    public IActionResult UpdateHistory([FromBody] HistoryRegisterUpdateDTO dto)
    {
        try
        {
            _historyRegisterService.UpdateHistory(dto);
            
            return Ok("Histórico adicionado com sucesso");
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return BadRequest(e.Message);
        }
    }
}