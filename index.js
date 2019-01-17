var root = document.body

var home = m('div', [
  m('div.cover', [
    m('img.cover-logo', {src: './img/nimrod_logo.svg'})
  ]),
  m('div.cf', [
    m('div.fl.ph4.w-100.w-50-m.w-50-l.mv4.f-headline.h5', [
      m('i.ion-ios-color-filter-outline.blue', {style: {fontSize:'2em'}}),
      m('p.mt0', 'Integrate'),
      m('p.f4.lh-copy', 'Connect to legacy building management protocols and new IoT infastructure without gateways.  Integrate at the ethernet layer and interact with protocols in their binary formats, reducing cost and lead times and vastly improving performance.')    ]),
    m('div.fl.ph4.w-100.w-50-m.w-50-l.mv4.f-headline.h5', [
      m('i.ion-ios-pulse.red', {style: {fontSize:'2em'}}),
      m('p.mt0', 'Monitor'),
      m('p.f4.lh-copy', 'Leave nothing to chance with hardware, software, and information redundancy.  Notify facility managers of equipment failures, controls staff of device failures, and IT staff of infastructure failures.')
    ]),
    m('div.fl.ph4.w-100.w-50-m.w-50-l.mv4.f-headline.h5', [
      m('i.ion-ios-settings.yellow', {style: {fontSize:'2em'}}),
      m('p.mt0', 'Control'),
      m('p.f4.lh-copy', 'Harness emergent real-time internet technologies to experience a new degree of confidence in commanding assets. Manage life-safety, micro-grid and district energy systems with constant feedback and visibilty.')
    ]),
    m('div.fl.ph4.w-100.w-50-m.w-50-l.mv4.f-headline.h5', [
      m('i.ion-ios-pie-outline.green', {style: {fontSize:'2em'}}),
      m('p.mt0', 'Analyze'),
      m('p.f4.lh-copy', 'Aggregate your existing silos into modern datastores prepared for performant queries on both complex relationships and extended volumes of timeseries data. Integrate with your current BI and modelling solutions through standard formats.')
    ]),
  ]),
  m('div.h5', [
    m('p.f-subheadline.tc',
      'Facility mangagement for the age of IoT'
    ),
    m('img.w-50', {src: './img/mockup.png'})
  ]),
  m('div.w-100.pa5.washed-blue.bg-gray', [
    m('img.w-100', {src: './img/BACnet-Logo-New.gif'}),
    m('img.w-100', {src: './img/external-lonworks-1494599649.png'})
  ]),
]);

m.render(root, home);

function typewriter (vnode) { 
  if (vnode.dom.attributes.value.value !== this.value) {
    var stringIndex = 0;
    function type () {
      setTimeout(function () {
        if (vnode.dom.innerHTML.length === vnode.dom.attributes.value.value.length) {
          return;
        } else {
          vnode.dom.innerHTML += vnode.dom.attributes.value.value[stringIndex];
          stringIndex ++;
          type();
        }
      }, 25)
    }
    type();
  }
}