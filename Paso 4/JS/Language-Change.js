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
        document.getElementById('start').textContent = data.home;
        document.getElementById('tools-desc-box').textContent = data.toolsDescBox;
        document.getElementById('projects-desc-box').textContent = data.projectsDescBox;
        document.getElementById('contact-desc-box').textContent = data.contactDescBox;
        document.getElementById('toolD1').textContent = data.toolD1;
        document.getElementById('toolD2').textContent = data.toolD2;
        document.getElementById('toolD3').textContent = data.toolD3;
        document.getElementById('toolD4').textContent = data.toolD4;
        document.getElementById('toolF1').textContent = data.toolF1;
        document.getElementById('toolF2').textContent = data.toolF2;
        document.getElementById('toolF3').textContent = data.toolF3;
        document.getElementById('toolF4').textContent = data.toolF4;
        document.getElementById('toolB1').textContent = data.toolB1;
        document.getElementById('toolB2').textContent = data.toolB2;
        document.getElementById('toolB3').textContent = data.toolB3;
        document.getElementById('toolB4').textContent = data.toolB4;
        document.getElementById('toolBC1').textContent = data.toolBC1;
        document.getElementById('toolBC2').textContent = data.toolBC2;
        document.getElementById('toolBC3').textContent = data.toolBC3;
        document.getElementById('toolBC4').textContent = data.toolBC4;
        

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