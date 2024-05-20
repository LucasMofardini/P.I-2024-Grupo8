using System;

namespace Project.Utils;

public class TimeUtils
{
    public static DateTime GetBrazilianUtcNow()
    {
        var brazilTimeZone = TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time");
            
        var brazilTime = TimeZoneInfo.ConvertTime(DateTime.UtcNow, brazilTimeZone);
            
        return brazilTime.ToUniversalTime();
    }
}
