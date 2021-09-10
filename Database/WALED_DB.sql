USE [master]
GO
/****** Object:  Database [Prueba_PIL]    Script Date: 9/9/2021 22:07:18 ******/
CREATE DATABASE [Prueba_PIL]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Proyecto_PIL', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.DBJSJUANPC1\MSSQL\DATA\Prueba_PIL.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Proyecto_PIL_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.DBJSJUANPC1\MSSQL\DATA\Prueba_PIL_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Prueba_PIL] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Prueba_PIL].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Prueba_PIL] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Prueba_PIL] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Prueba_PIL] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Prueba_PIL] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Prueba_PIL] SET ARITHABORT OFF 
GO
ALTER DATABASE [Prueba_PIL] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Prueba_PIL] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Prueba_PIL] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Prueba_PIL] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Prueba_PIL] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Prueba_PIL] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Prueba_PIL] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Prueba_PIL] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Prueba_PIL] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Prueba_PIL] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Prueba_PIL] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Prueba_PIL] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Prueba_PIL] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Prueba_PIL] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Prueba_PIL] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Prueba_PIL] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Prueba_PIL] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Prueba_PIL] SET RECOVERY FULL 
GO
ALTER DATABASE [Prueba_PIL] SET  MULTI_USER 
GO
ALTER DATABASE [Prueba_PIL] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Prueba_PIL] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Prueba_PIL] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Prueba_PIL] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Prueba_PIL] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Prueba_PIL] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Prueba_PIL] SET QUERY_STORE = OFF
GO
USE [Prueba_PIL]
GO
/****** Object:  Table [dbo].[Cuentas]    Script Date: 9/9/2021 22:07:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cuentas](
	[cuentaID] [int] IDENTITY(1,1) NOT NULL,
	[usuarioID] [int] NULL,
	[CVU] [nvarchar](22) NULL,
	[parametroID] [int] NULL,
	[saldo] [nvarchar](50) NULL,
	[fechaAlta] [time](7) NULL,
	[fechaBaja] [time](7) NULL,
 CONSTRAINT [PK__Cuentas__1808B1C224BD3401] PRIMARY KEY CLUSTERED 
(
	[cuentaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Depositos]    Script Date: 9/9/2021 22:07:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Depositos](
	[depositoID] [int] IDENTITY(1,1) NOT NULL,
	[cuentaID] [int] NULL,
	[montoDepo] [nvarchar](1) NULL,
	[fecha] [nvarchar](1) NULL,
 CONSTRAINT [PK__Deposito__405658D5C478A803] PRIMARY KEY CLUSTERED 
(
	[depositoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Parametros]    Script Date: 9/9/2021 22:07:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Parametros](
	[parametroID] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](10) NULL,
	[parametro1] [varchar](10) NULL,
	[parametro2] [varchar](10) NULL,
 CONSTRAINT [PK__Parametr__6B142592A08955B6] PRIMARY KEY CLUSTERED 
(
	[parametroID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Retiros]    Script Date: 9/9/2021 22:07:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Retiros](
	[retiroID] [int] IDENTITY(1,1) NOT NULL,
	[cuentaID] [int] NULL,
	[montoRetiro] [money] NULL,
	[fecha] [nvarchar](1) NULL,
 CONSTRAINT [PK__Retiros__3E4C520710D1AF0D] PRIMARY KEY CLUSTERED 
(
	[retiroID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transacciones]    Script Date: 9/9/2021 22:07:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transacciones](
	[transaccionID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[transaccionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transferencias]    Script Date: 9/9/2021 22:07:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transferencias](
	[transferenciaID] [int] IDENTITY(1,1) NOT NULL,
	[cuentaID] [int] NULL,
	[CVU_destino] [nvarchar](15) NULL,
	[monto] [nvarchar](1) NULL,
	[fecha] [nvarchar](10) NULL,
 CONSTRAINT [PK__Transfer__0A2346A82BDAEBA6] PRIMARY KEY CLUSTERED 
(
	[transferenciaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[USuarios]    Script Date: 9/9/2021 22:07:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USuarios](
	[usuarioID] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](20) NULL,
	[apellido] [nvarchar](20) NULL,
	[correo] [nvarchar](30) NULL,
	[contraseña] [nvarchar](20) NULL,
	[es_valida] [int] NULL,
 CONSTRAINT [PK__USuarios__A5B1ABAEF5765EB9] PRIMARY KEY CLUSTERED 
(
	[usuarioID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Parametros] ON 
GO
INSERT [dbo].[Parametros] ([parametroID], [descripcion], [parametro1], [parametro2]) VALUES (2, NULL, N'', NULL)
GO
SET IDENTITY_INSERT [dbo].[Parametros] OFF
GO
SET IDENTITY_INSERT [dbo].[USuarios] ON 
GO
INSERT [dbo].[USuarios] ([usuarioID], [nombre], [apellido], [correo], [contraseña], [es_valida]) VALUES (1, N'Juan', N'Serafini', N'eljas.juan@gmail.com', N'Mengeche', 1)
GO
SET IDENTITY_INSERT [dbo].[USuarios] OFF
GO
ALTER TABLE [dbo].[Cuentas]  WITH CHECK ADD  CONSTRAINT [FK_Cuentas_Parametros] FOREIGN KEY([parametroID])
REFERENCES [dbo].[Parametros] ([parametroID])
GO
ALTER TABLE [dbo].[Cuentas] CHECK CONSTRAINT [FK_Cuentas_Parametros]
GO
ALTER TABLE [dbo].[Cuentas]  WITH CHECK ADD  CONSTRAINT [FK_Cuentas_USuarios] FOREIGN KEY([usuarioID])
REFERENCES [dbo].[USuarios] ([usuarioID])
GO
ALTER TABLE [dbo].[Cuentas] CHECK CONSTRAINT [FK_Cuentas_USuarios]
GO
ALTER TABLE [dbo].[Depositos]  WITH CHECK ADD  CONSTRAINT [FK_Depositos_Cuentas] FOREIGN KEY([cuentaID])
REFERENCES [dbo].[Cuentas] ([cuentaID])
GO
ALTER TABLE [dbo].[Depositos] CHECK CONSTRAINT [FK_Depositos_Cuentas]
GO
ALTER TABLE [dbo].[Retiros]  WITH CHECK ADD  CONSTRAINT [FK_Retiros_Cuentas] FOREIGN KEY([cuentaID])
REFERENCES [dbo].[Cuentas] ([cuentaID])
GO
ALTER TABLE [dbo].[Retiros] CHECK CONSTRAINT [FK_Retiros_Cuentas]
GO
ALTER TABLE [dbo].[Transferencias]  WITH CHECK ADD  CONSTRAINT [FK_Transferencias_Cuentas] FOREIGN KEY([cuentaID])
REFERENCES [dbo].[Cuentas] ([cuentaID])
GO
ALTER TABLE [dbo].[Transferencias] CHECK CONSTRAINT [FK_Transferencias_Cuentas]
GO
USE [master]
GO
ALTER DATABASE [Prueba_PIL] SET  READ_WRITE 
GO