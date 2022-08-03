#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

# syntax=docker/dockerfile:1.2

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Delightful Daily Dose/Delightful Daily Dose.csproj", "Delightful Daily Dose/"]
RUN dotnet restore "Delightful Daily Dose/Delightful Daily Dose.csproj"
COPY . .
WORKDIR "/src/Delightful Daily Dose"
RUN --mount=type=secret,id=JWTSecretKey \
    --mount=type=secret,id=JWTLifespan \
    --mount=type=secret,id=EmailAddress \
    --mount=type=secret,id=EmailPassword \
    JWTSecretKey="$(cat /run/secrets/JWTSecretKey)" && \
    export JWTSecretKey && \
    JWTLifespan="$(cat /run/secrets/JWTLifespan)" && \
    export JWTLifespan && \
    EmailAddress="$(cat /run/secrets/EmailAddress)" && \
    export EmailAddress && \
    EmailPassword="$(cat /run/secrets/EmailPassword)" && \
    export EmailPassword && \
    dotnet build "Delightful Daily Dose.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Delightful Daily Dose.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Delightful Daily Dose.dll"]