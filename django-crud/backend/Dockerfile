FROM python:3.13.0a4-alpine3.19


# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo requirements.txt al contenedor en /app
COPY requirements.txt /app/

# Instala las dependencias del proyecto
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto de los archivos al contenedor en /app
COPY . /app/

# Expone el puerto 8000 para que pueda ser accesible desde el exterior
EXPOSE 8000

# Indica al contenedor que debe ejecutar estos comandos cuando se inicie
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]