FROM python
WORKDIR /example
COPY . /example
CMD ["python","example.py"]