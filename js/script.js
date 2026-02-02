window.addEventListener('scroll', function() {
  let header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.remove('transparent');
    header.classList.add('solid');
  } else {
    header.classList.remove('solid');
    header.classList.add('transparent');
  }
});

// анимации при скроле

document.addEventListener("DOMContentLoaded", () => {
  let left = document.querySelectorAll(".animate-left");
  let right = document.querySelectorAll(".animate-right");
  let top = document.querySelectorAll(".animate-top");
  let bottom = document.querySelectorAll(".animate-bottom");

function checkVisibility() {
  left.forEach((element) => {
      let elementPosition = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight * 0.7;
  if(elementPosition < screenPosition) {
      element.classList.add("visible");
  } else {
      element.classList.remove("visible");
    }
  });
  right.forEach((element) => {
      let elementPosition = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight * 0.7;
  if(elementPosition < screenPosition) {
      element.classList.add("visible");
  } else {
      element.classList.remove("visible");
    }
  });
  top.forEach((element) => {
      let elementPosition = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight * 0.7;
  if(elementPosition < screenPosition) {
      element.classList.add("visible");
  } else {
      element.classList.remove("visible");
    }
  });
  bottom.forEach((element) => {
      let elementPosition = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight * 0.7;
  if(elementPosition < screenPosition) {
      element.classList.add("visible");
  } else {
      element.classList.remove("visible");
    }
  });
}

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

// отправка на почту

(function() {
    emailjs.init('_XBZK2SyNEJDSNiDC');
})();

(function() {
emailjs.init('_XBZK2SyNEJDSNiDC');
document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.getElementsByClassName('apply-btn');
    for (let i = 0; i < applyButtons.length; i++) {
        applyButtons[i].addEventListener('click', function() {
            alert('Пожалуйста, заполните анкету');
        });
    }
        
        // Обработчик для кнопки отправки формы
const submitBtn = document.getElementById('submit-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Проверка заполнения обязательных полей
        const requiredFields = ['last-name', 'first-name', 'email', 'phone'];
        let isValid = true;
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field || !field.value.trim()) {
                isValid = false;
                field.style.border = '1px solid red';
            } else {
                field.style.border = '';
            }
        });
        
        if (!isValid) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        // Сбор данных формы
        const formData = {
            vacancy: document.getElementById('vacancy')?.value || '',
            lastName: document.getElementById('last-name')?.value || '',
            firstName: document.getElementById('first-name')?.value || '',
            middleName: document.getElementById('middle-name')?.value || '',
            birthDate: document.getElementById('birth-date')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            address: document.getElementById('address')?.value || '',
            email: document.getElementById('email')?.value || '',
            citizenship: document.getElementById('citizenship')?.value || '',
            militaryId: document.getElementById('military-id')?.value || '',
            education: document.getElementById('education')?.value || '',
            faculty: document.getElementById('faculty')?.value || '',
            specialty: document.getElementById('specialty')?.value || '',
            institution: document.getElementById('institution')?.value || '',
            pcSkills: document.getElementById('pc-skills')?.value || '',
            about: document.getElementById('about')?.value || '',
            experience: document.getElementById('experience')?.value || ''
        };
        
        // Отправка через EmailJS
        emailjs.send('service_uqas3sd', 'template_28qg4qi', formData)
            .then(function(response) {
                alert('Ваша заявка успешно отправлена!');
                document.getElementById('job-application-form')?.reset();
            }, function(error) {
                alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
                console.error('Ошибка EmailJS:', error);
            });
    });
} else {
    console.warn('Кнопка submit-btn не найдена на странице');
}
});
})();
// бургер меню
const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});