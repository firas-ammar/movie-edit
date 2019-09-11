import wick from './wick.jpg';
import ninja from './ninja.jpg';
import menblack from './menblack.jpg';


let tablist=[{id:'0', image:wick, title:'John Wick: Chapter 3',rating:'4' },
{id:'1', image:ninja, title:'Ninja Assassin',rating:'5' },
{id:'2', image:menblack, title:'Men in Black', rating:'3' }]


const moviesFilterRed = (state = tablist, action) => {

    if(action.type === 'ADD_MOVIE') {

        return [...state,action.movie]
    }

    if(action.type === 'EDIT_MOVIE') {

        return state.map((el,index) =>index==action.id? action.movie:el)
       }
    
    if(action.type === 'DELETE_MOVIE') {

      
        return state.filter((el,index)=>index!=action.cin)
    }
    return state
}

export default moviesFilterRed