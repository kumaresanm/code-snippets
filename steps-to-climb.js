function staircaseTraversal(height, maxSteps) {
    // Write your code here.
    return numberOfSteps(height, maxSteps);
  }
  
  function numberOfSteps(height, maxSteps){
      if(height < 1) return 1;
      let numberOfWays = 0;
      for(let step = 1; step < Math.min(maxSteps, height) + 1; step++){
          numberOfWays += numberOfSteps(height - step, maxSteps);
      } 
      return numberOfWays;
  }

  staircaseTraversal(4,2);