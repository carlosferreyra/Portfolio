import marimo

__generated_with = "0.11.6"
app = marimo.App(width="medium")


@app.cell
def _():
    return


@app.cell
def _():
    from PyPDF2 import PdfReader

    reader = PdfReader("./public/Resume.pdf")
    number_of_pages = len(reader.pages)
    page = reader.pages[0]
    text = page.extract_text()
    print(page,number_of_pages)
    return PdfReader, number_of_pages, page, reader, text


if __name__ == "__main__":
    app.run()
