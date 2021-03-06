#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 5001

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["PostWeb.Api/PostWeb.Api.csproj", "PostWeb.Api/"]
COPY ["PostWeb.Infrastructure/PostWeb.Infrastructure.csproj", "PostWeb.Infrastructure/"]
COPY ["PostWeb.Core/PostWeb.Core.csproj", "PostWeb.Core/"]
RUN dotnet restore "PostWeb.Api/PostWeb.Api.csproj"
COPY . .
WORKDIR "/src/PostWeb.Api"
RUN dotnet build "PostWeb.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PostWeb.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PostWeb.Api.dll"]
