FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Delightful Daily Dose/Delightful Daily Dose.csproj", "Delightful Daily Dose/"]
RUN dotnet restore "Delightful Daily Dose/Delightful Daily Dose.csproj"
COPY . .
WORKDIR "/src/Delightful Daily Dose"
RUN dotnet build "Delightful Daily Dose.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Delightful Daily Dose.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "'Delightful Daily Dose.dll'"]