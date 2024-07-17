export function  allowTo(...arr){
    return (req,res,next)=>{
        console.log(req.body.role);
        if( arr.includes(req.user.role))
            {
           next()
        }else{
    res.status(401).json({message:"not authorize"})
         }
    
    }
    }
    