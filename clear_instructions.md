Question: Create a student record in XML and validate it using an external DTD rulebook.

#PCDATA: Stands for "Parsed Character Data." It simply means standard text goes inside this tag.

1. The Rulebook (student.dtd)
Create this file and save it in your folder.

Code snippet
<!ELEMENT student (name, age)>
<!ELEMENT name (#PCDATA)>
<!ELEMENT age (#PCDATA)>
ELEMENT: Defines a tag you are allowed to use.

(name, age): Forces the student tag to contain exactly one name and one age, in that exact order.

#PCDATA: Stands for "Parsed Character Data." It simply means standard text goes inside this tag.

2. The Data (data.xml)
Create this file in the exact same folder.

XML
<?xml version="1.0"?>
<!DOCTYPE student SYSTEM "student.dtd">
<student>
    <name>Ajay</name>
    <age>20</age>
</student>
<?xml version="1.0"?>: Tells the computer this is an XML file.

DOCTYPE student: States that the main root tag of the document will be <student>.

SYSTEM "student.dtd": This is the link. It tells the browser to look locally in the same folder for student.dtd and apply its rules.

How to Show the Output to Your Instructor

Open Google Chrome.

Drag and drop your data.xml file directly from your folder into an empty browser tab.

You will see an expandable tree of your code with a banner at the top saying, "This XML file does not appear to have any style information..."

This is a 100% correct success screen. Tell your instructor, "Here is the well-formed XML tree, and it successfully validates against the linked external DTD." Keep VS Code open side-by-side to show your source files if asked.