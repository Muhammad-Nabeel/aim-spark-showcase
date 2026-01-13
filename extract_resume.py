import PyPDF2

pdf_path = r"c:\Users\M-NABEEL\Documents\Personal\M_NABEEL_RESUME_MAIN.pdf"

with open(pdf_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"

print(text)