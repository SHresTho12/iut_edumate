export function getAjax(resource) {
  return new Promise(function(resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          var response;
          if (this.responseText) {
            try {
              response = JSON.parse(this.responseText);
            } catch(e) {
              try {
                response = new DOMParser().parseFromString(this.responseText, "text/html");
              } catch(e) {
                reject('Parse error: ' + e);
              }
            }
          }
          resolve(response);
        } else {
          reject('HTTP Error: ' + this.statusText);
        }
      }
    };
    xhttp.open('GET', resource, true);
    xhttp.send();
  });
}

export function parseUserInfo(username) {
  return new Promise(function(resolve, reject) {
    getAjax('https://www.freecodecamp.com/' + username).then(function(response) {
      resolve(getParsedUserInfo(response));
    }, function(err) {
      reject(err);
    })
  })
}

function getParsedUserInfo(response) {
  let parsedUserInfo = {
    socialLinks: {
      twitter: null,
      github: null,
      linkedIn: null
    },
    realName: null,
    location: null,
    bio: null,
    longestStreak: null,
    currentStreak: null,
    projects: []
  };
  // Social links
  const links = response.getElementsByClassName('profile-social-icons')[0].getElementsByTagName('a');
  for(let j = 0; j < links.length; j++) {
    if (new RegExp('twitter.com').test(links[j].href)) {
      parsedUserInfo.socialLinks.twitter = links[j].href;
    } else if (new RegExp('github.com').test(links[j].href)) {
      parsedUserInfo.socialLinks.github = links[j].href;
    } else if (new RegExp('linkedin.com').test(links[j].href)) {
      parsedUserInfo.socialLinks.linkedIn = links[j].href;
    }
  }
  // Main info
  parsedUserInfo.realName = response.getElementsByClassName('wrappable')[0].innerText;
  parsedUserInfo.location = response.getElementsByClassName('wrappable')[1].innerText;
  parsedUserInfo.bio = response.getElementsByClassName('bio')[0].innerText;
  parsedUserInfo.longestStreak = response.getElementsByClassName('text-right')[0].innerText;
  parsedUserInfo.currentStreak = response.getElementsByClassName('text-left')[0].innerText;
  // Projects
  if (response.getElementsByTagName('th')[0].innerText === 'Projects') {
    const rows = response.getElementsByClassName('table-striped')[0]
      .getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      parsedUserInfo.projects.push({
        title: rows[i].getElementsByTagName('td')[0].innerText,
        link: rows[i].getElementsByTagName('td')[3].getElementsByTagName('a')[0].href
      });
    }
  }
  return parsedUserInfo;
}
