import React from 'react'
import './table.css'

const pronouns = ['', 'yo', 'tu', 'el/ella/usted', 'nosotros', 'ellos/ustedes'];
const tenses = ['present', 'imperfect', 'indefinido']


const table = ({verb, verbData}) => {
    
    return (
    <div>
    <h3  align = 'center' className='verbHeading'>{verb}</h3>
    {console.log(verbData)}
    <table align='center'>
    
    {pronouns.map((pronoun) => (
        
        <td  className='tableHeading'>{pronoun}</td>
))}

    
    {Object.values(verbData).map((item, index) => (        
             <tr key={item.id}>
            <tr><td className='tableHeading'>{tenses[index]}</td></tr>
                
            {Object.values(item).map((val, index) => (
               <>
               <td>{val}</td>
                </> 
            ))}
            
            </tr>
         
      ))}
      </table>
    </div>
  )
}

export default table