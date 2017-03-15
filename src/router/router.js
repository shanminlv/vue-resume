import wrapper from '../components/wrapper'
import left from '../components/left'
import resumeBlue from '../components/resumeBlue'
import resumeAroud from '../components/resumeAroud'
import selectResume from '../components/selectResume'

export default [
{
    path: '/edit',
    name:'edit',
    components:{
        left,
        wrapper
    },
    children:[
    	{
    		path:'resumeBlue',
    		components:{
    			resumeBlue
    		}
    	},
    	{
    		path:'resumeAroud',
    		components:{
    			resumeAroud
    		}
    	}
    ]
},
{
    path:'/resume',
    components:{
        selectResume,
        wrapper
    },
    children:[
    	{
    		path:'resumeBlue',
    		components:{
    			resumeBlue
    		}
    	},
    	{
    		path:'resumeAroud',
    		name:'resume',
    		components:{
    			resumeAroud
    		}
    	}
    ]
},
{
    path:"/",
    redirect:'/edit/resumeBlue'
}
]