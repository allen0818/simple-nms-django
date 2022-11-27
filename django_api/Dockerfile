# Base image
# FROM python:3.11-alpine
FROM python:3.10-slim-bullseye
LABEL maintainer="allen0818"

# Set environment variables
ENV PYTHONBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV APPHOME=/api

# Upgrade pip version
RUN pip install pip -U
RUN pip install --upgrade pip

# Create App home
RUN mkdir $APPHOME
WORKDIR $APPHOME

# Install dependency
COPY requirements.txt . 
RUN pip install -r requirements.txt

# EXPOSE 8000
# CMD python manage.py runserver