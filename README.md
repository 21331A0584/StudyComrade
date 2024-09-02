# StudyComrade
Site Link --> https://21331a0584.github.io/StudyComrade/


Study Comrade is a web-based application designed to help students plan and manage their study schedules based on their academic year, semester, and available time before exams. The application generates a custom schedule that prioritizes subjects and allocates time accordingly.

## Features
- Input the academic year and semester to display relevant subjects.
- Allows students to set their study priorities for each subject.
- Generates a personalized study plan based on the number of days left before exams.
- Export generated schedules as a PDF for offline use.
- User-friendly interface with real-time validation.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: No backend; runs entirely on the client-side
- **Libraries**: 
  - PDFMake (for PDF generation)
  - HTML2Canvas (for converting the web page to canvas)
  
## Folder Structure
```plaintext
Study-Comrade/
│
├── index.html          # Main entry page
├── form.html           # Schedule generation form
├── stylesheets/
│   └── index.css       # Styling for the main page
│   └── form.css        # Styling for the form page
├── scripts/
│   └── index.js        # JavaScript for the main page
│   └── form.js         # JavaScript for the form page
└── README.md           # This file