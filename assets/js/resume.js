fetch('assets/data/resume.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('summary').textContent = data.summary;

    const expList = document.getElementById('experience-list');
    data.experience.forEach(job => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${job.role}</strong> @ ${job.company} (${job.years}): ${job.description}`;
      expList.appendChild(li);
    });

    const skillsList = document.getElementById('skills-list');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    const eduList = document.getElementById('education-list');
    data.education.forEach(edu => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${edu.degree}</strong>, ${edu.school} (${edu.year})`;
      eduList.appendChild(li);
    });

    const linksNav = document.getElementById('links');
    for (const [name, url] of Object.entries(data.links)) {
      const a = document.createElement('a');
      a.href = url;
      a.textContent = name;
      a.target = '_blank';
      a.style.marginRight = '1rem';
      linksNav.appendChild(a);
    }
  });