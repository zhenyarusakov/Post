using System.Collections.Generic;
using System.IO;
using AutoMapper;
using Microsoft.AspNetCore.Http;

namespace PostWeb.Api.AutoMapper;

public class FormFileToByteCollectionConverter : ITypeConverter<IFormFile, IReadOnlyCollection<byte>>
{
    public IReadOnlyCollection<byte> Convert(IFormFile source, IReadOnlyCollection<byte> destination, ResolutionContext context)
    {
        using var ms = new MemoryStream();
        
        source.CopyTo(ms);
        var bytes = ms.ToArray();

        return bytes;
    }
}