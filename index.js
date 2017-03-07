var root = document.body

var home = m('div', [
  m('div.cover', [
    m('img.cover-logo', {src: './img/nimrod_logo.svg'})
  ]),
  m('div.contact', [
    m('div.contact-text', [
      m('p.h3.center.justify', 'Built from the ground up for the real time web - nimrod delivers a modern, collaborative workspace to help you manage your facilities.  It is currently managing thousands of devices in production as part of an ongoing closed beta.  Nimrod is made available under the highly permissive Mozilla Public License.  To find out if Nimrod can be used in your facility:'),
      m('a', {href: 'mailto:sales@nimrod.io'}, [
        m('button.btn.right', 'Contact Us')
      ])
    ])
  ])
]);

m.render(root, home);
