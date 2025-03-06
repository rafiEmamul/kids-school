const link = document.getElementById('something');

link.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = 'blog.html';
});

const btns = document.querySelectorAll('.completed-btn');

btns.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    event.preventDefault();

    const alertResult = window.confirm("Successfully Add Activity Log");

    if (alertResult) {
      const title = btn.closest('.cart').querySelector('.title').innerText;
      const currentTime = new Date();
      const formattedTime = formatTime(currentTime);
      const message = `Congrates !! You have completed all the current task "${title}" at ${formattedTime}`;
      const activityLog = document.querySelector('.body-right p');
      const newLog = document.createElement('p');
      newLog.textContent = message;
      activityLog.appendChild(newLog);

      let assignValue = parseInt(document.querySelector('.assign-value').innerText);
      let inputValue = parseInt(document.querySelector('.input-value').innerText);

      assignValue--;
      inputValue++;

      if (assignValue < 0) {
        assignValue = 0;
      }

      document.querySelector('.assign-value').innerText = assignValue;
      document.querySelector('.input-value').innerText = inputValue;

      if (assignValue === 0) {
        alert("Successfully Add Activity Log");
        alert("You have completed all the tasks");
      }

      btn.disabled = true;
    }
  });
});

document.querySelector('.clear-btn').addEventListener('click', function() {
  const activityLog = document.querySelector('.body-right p');
  activityLog.innerHTML = '';
});

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}



const currentDate = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const date = currentDate.toLocaleDateString('en-US', options);
document.querySelector('.currentDate').innerText = date;

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', function(event) {
  event.preventDefault();
  const bgColor = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
  document.body.style.backgroundColor = bgColor;
});






