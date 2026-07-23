export const events = {
  diplomacy: [
    {
      title: 'DOTMUN : Crisis Committee Session',
      location: 'Hyderabad',
      image: '/Images/1.jpg',
    },
    {
      title: 'DOTMUN : Delegate Night Session',
      location: 'Hyderabad',
      image: '/Images/4.jpg',
    },
    {
      title: 'DOTMUN Nawabshah: Closing Dinner & Team Celebration',
      location: 'Nawabshah',
      image: '/Images/3.jpg',
    },
    {
      title: 'DOTMUN : Team Moment',
      location: 'Hyderabad',
      image: '/Images/6.jpeg',
    },
    {
      title: 'DOTMUN : Behind the Scenes',
      location: 'Hyderabad',
      image: '/Images/7.jpeg',
    },
  ],
}

export const getEventsByPillar = (pillarId) => events[pillarId] || []