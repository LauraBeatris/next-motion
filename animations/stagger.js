// staggerChildren => Orchestrate when children animations play relative to their parent.
export default (staggerChildren = 0.3) => { 
    return { 
        animate: { 
          transition: { 
            staggerChildren
          }
        }
      }
}