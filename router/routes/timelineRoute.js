import { client } from '../../config/prismicConfig.js'  

export const renderTimeline = async (req, res) =>{
  let allStories = await client.getAllByType('story')
    
  allStories.sort((a, b) => a.data.numberid - b.data.numberid)

  res.render('timeline', 
  { allStories, 
    css : "/styles/timeline.css" 
  })
}