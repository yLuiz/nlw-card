const links = {
  github: 'yLuiz',
  youtube: 'UC0TM0YcQ_ZcfTAl-nJVgSfg',
  facebook: '100005580187087',
  instagram: 'luiz_.v',
  twitter: 'LU1Z_1231'
}

function changeMediaSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeMediaSocialLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
