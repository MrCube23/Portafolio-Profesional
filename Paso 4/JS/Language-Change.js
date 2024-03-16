let currentLanguage = 'ES';
window.carrousel = null;
window.sweetText = null;

async function loadLanguage(language) {
    try {
        const response = await fetch('../Assets/Languages/' + language + '.json');
        const data = await response.json();

        document.getElementById('about').textContent = data.about;
        document.getElementById('tools').textContent = data.tools;
        document.getElementById('works').textContent = data.works;
        document.getElementById('contact').textContent = data.contact;
        document.getElementById('aboutmetitle').textContent = data.aboutmetitle;
        document.getElementById('descAboutMe').textContent = data.descAboutMe;
        document.getElementById('design').textContent = data.design;
        document.getElementById('databases').textContent = data.databases;
        document.getElementById('toolsID').textContent = data.toolsID;
        document.getElementById('pageRights').textContent = data.pageRights;
        document.getElementById('contactID').textContent = data.contactID;
        document.getElementById('nameFieldId').textContent = data.nameFieldId;
        document.getElementById('mailFieldId').textContent = data.mailFieldId;
        document.getElementById('subjectFieldId').textContent = data.subjectFieldId;
        document.getElementById('messageFieldId').textContent = data.messageFieldId;
        document.getElementById('sendButtonForm').textContent = data.sendButtonForm;
        document.getElementById('projectsID').textContent = data.projectsID;
        document.getElementById('projectTitleOne').textContent = data.projectTitle;
        document.getElementById('projectDesOne').textContent = data.projectDesc;
        document.getElementById('projectTitleTwo').textContent = data.projectTitleTwo;
        document.getElementById('projectDesTwo').textContent = data.projectDescTwo;

        carrousel = data.welcomeMessages;
        sweetText = data.sweetAlertText;
        saveOnGlobal(data.welcomeMessages,data.sweetAlertText);
        updateButtonLabel(language);
    } catch (error) {
        console.error('Error, language not found:', error);
    }
}

function saveOnGlobal(dataToSaveCarrousel, dataToSaveSweet) {
    welcomeMessages = dataToSaveCarrousel;
    sweetAlertText = dataToSaveSweet;
}

function toggleLanguage() {
    if (currentLanguage === 'ES') {
        loadLanguage('EN');
        currentLanguage = 'EN';
    } else {
        loadLanguage('ES');
        currentLanguage = 'ES';
    }
}

function updateButtonLabel(language) {
    const button = document.getElementById('language-change');
    if (language === 'EN') {
        button.textContent = 'English';
    } else {
        button.textContent = 'Español';
    }
}

loadLanguage(currentLanguage);