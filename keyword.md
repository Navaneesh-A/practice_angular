(product+): The + symbol means the inventory must contain at least one or more products. If you used *, it would mean zero or more.

ATTLIST: Stands for Attribute List. It defines properties that go inside the opening tag (like <product id="P001">), rather than between tags.

ID: Forces the value to be completely unique in the entire document. If you accidentally gave two products the ID "P001", the XML would fail validation.

#REQUIRED: The tag will crash if this attribute is missing. Every product must have an ID.

CDATA: Stands for Character Data. It means any standard text or numbers can be typed here.

#IMPLIED: This means the attribute is optional. The XML is still valid if you leave it out (which is why Product 2 works without a category).

Create an XML file for a hardware inventory. The inventory must contain one or more products. Each product must have a unique ID (mandatory) and can optionally have a category (optional). Inside the product, it must strictly contain a name and price. Validate this using an external DTD.

1. The External DTD Rulebook (inventory.dtd)
Create this file to define the strict rules and keywords.

Code snippet
<!ELEMENT inventory (product+)>
<!ELEMENT product (name, price)>
<!ATTLIST product 
          id ID #REQUIRED
          category CDATA #IMPLIED>
<!ELEMENT name (#PCDATA)>
<!ELEMENT price (#PCDATA)>
2. The XML Data (data.xml)
Create this file in the exact same folder and link it to the DTD.

XML
<?xml version="1.0"?>
<!DOCTYPE inventory SYSTEM "inventory.dtd">
<inventory>
    <!-- Product 1 uses all attributes -->
    <product id="P001" category="Electronics">
        <name>Laptop</name>
        <price>55000</price>
    </product>

    <!-- Product 2 omits the optional category -->
    <product id="P002">
        <name>Mouse</name>
        <price>500</price>
    </product>
</inventory>