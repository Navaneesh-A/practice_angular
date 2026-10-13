Create a main directory for your lab reference and save the following files inside it based on the requirements from "exp 8.pdf".

Install the Extension: Go to the VS Code Extensions tab (Ctrl + Shift + X) and search for XML (the one by Red Hat is standard). Install it.

Format the File: Open your .xml file and press Shift + Alt + F (Windows). It will instantly format the code.

### 1. Student Details

Create an XML file containing the name, age, course, and grade of three students.

**File: `student.xml**`

```xml
<?xml version="1.0"?>
<students>
<student><name>Afrin</name><age>20</age><course>IT</course><grade>A</grade></student>
<student><name>Arun</name><age>21</age><course>CSE</course><grade>B</grade></student>
<student><name>Ajay</name><age>20</age><course>IT</course><grade>A</grade></student>
</students>

```

### 2. Bookstore

Define books with a required title, author, year, and optional price.

**File: `bookstore.dtd**`

```dtd
<!ELEMENT bookstore (book+)>
<!ELEMENT book (title, author, year, price?)>
<!ELEMENT title (#PCDATA) >
<!ELEMENT author (#PCDATA) >
<!ELEMENT year (#PCDATA)>
<!ELEMENT price (#PCDATA) >

```

**File: `bookstore.xml**`

```xml
<!DOCTYPE bookstore SYSTEM "bookstore.dtd">
<bookstore>
<book><title>XML Basics</title> <author>John</author><year>2025</year><price>450</price></book>
</bookstore>

```

### 3. Employee Database

Define name, ID, and department as required, and address as optional.

**File: `employee.dtd**`

```dtd
<!ELEMENT employees (employee+)>
<!ELEMENT employee (name, id, department, address?)>
<!ELEMENT name (#PCDATA)>
<!ELEMENT id (#PCDATA)>
<!ELEMENT department (#PCDATA) >
<!ELEMENT address (#PCDATA) >

```

**File: `employee.xml**`

```xml
<!DOCTYPE employees SYSTEM "employee.dtd">
<employees>
<employee><name>Afrin</name> <id>IT1002</id><department>IT</department></employee>
</employees>

```

### 4. Recipe Book

Define a recipe with a title, at least one ingredient, and instructions.

**File: `recipe.xml**` (Contains combined DTD and XML elements as provided)

```xml
<!ELEMENT recipe (title, ingredients, instructions)>
<!ELEMENT title (#PCDATA) >
<!ELEMENT ingredients (ingredient+)>
<!ELEMENT ingredient (#PCDATA) >
<!ATTLIST ingredient quantity CDATA #IMPLIED unit CDATA #IMPLIED>
<!ELEMENT instructions (#PCDATA) >
<recipe>
<title>Pasta</title>
<ingredients><ingredient quantity ="200" unit="g">Pasta</ingredient></ingredients>
<instructions>Boil and serve.</instructions>
</recipe>

```

### 5. Movie Catalog (Internal DTD)

Create a movie catalog with title, director, genre, and release year using an internal DTD.

**File: `movies.xml**`

```xml
<!DOCTYPE movies [
<!ELEMENT movies (movie+)>
<!ELEMENT movie (title, director, genre, releaseYear)>
<!ELEMENT title (#PCDATA) >
<!ELEMENT director (#PCDATA) >
<!ELEMENT genre (#PCDATA) >
<!ELEMENT releaseYear (#PCDATA)>
]>
<movies>
<movie><title>Inception</title><director>Nolan</director><genre>SF</genre><releaseYear>2010</releaseYear></movie>
</movies>

```

### 6. Product Inventory

Define product name, category, and price with a required unique identifier.

**File: `inventory.xml**` (Contains combined DTD and XML elements as provided)

```xml
<!ELEMENT inventory (product+)>
<!ELEMENT product (name,category, price, description?, stock?)>
<!ATTLIST product id ID #REQUIRED>
<!ELEMENT name (#PCDATA) >
<!ELEMENT category (#PCDATA) >
<!ELEMENT price (#PCDATA)>
<!ELEMENT description (#PCDATA)>
<!ELEMENT stock (#PCDATA)>
<inventory>
<product id="P101"><name>Laptop</name> <category>Electronics</category> <price>55000</price></product>
</inventory>

```

### 7. External DTD Modification

Create a separate DTD file and reference it from the XML using DOCTYPE.

**File: `product.dtd**` (Inferred from DOCTYPE reference)
*(Use the DTD constraints defined in experiment 6 for this file).*

**File: `external_inventory.xml**`

```xml
<?xml version ="1.0"?>
<!DOCTYPE inventory SYSTEM "product.dtd">
<inventory>
<product id="P101">
<name>Laptop</name> <category>Electronics</category> <price>55000</price>
</product>
</inventory>

```

Would you like a Node.js script that automatically creates this folder and generates all these files for you at once?