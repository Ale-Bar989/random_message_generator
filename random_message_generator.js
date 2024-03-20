function generateRandomOpction(num) {
    return Math.floor(Math.random() * num);
}

const collectivesPhrases = {
    startDay: ['are awesome', 'will archive anything you want', 'can be whoever you want', 'cannot stop'],
    quote: [`"HE WHO IS BRAVE IS FREE" SENECA`, `"TRY AGAIN, FAIL AGAIN, FAIL BETTER" Samuel Beckett`, `"PROVE THEM WRONG"`, `"DO IT WITH PASSION OR NOT AT ALL"`],
    advice: ['go to the gym', 'work on yourself', 'believe in yourself', 'be more kind with people', 'repect others']
};

 // Store the 'wisdom' in an array
 let motivationMessage = [];
  
 // Iterate over the object
for(let prop in collectivesPhrases) {
   let optionIdx = generateRandomOpction(collectivesPhrases[prop].length)
 
   // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
        case 'startDay':
            motivationMessage.push(`Your ${collectivesPhrases[prop][optionIdx]}.`);
            break;
        case 'quote':
            motivationMessage.push(`Think about this: ${collectivesPhrases[prop][optionIdx]}.`);
            break;
        case 'advice':
            motivationMessage.push(`You should ${collectivesPhrases[prop][optionIdx]}.`);
            break;
        default:
            motivationMessage.push('There is not enough info.');
    }
}

function formatMessage(message) {
    const formatted = motivationMessage.join('\n');
    return formatted;
  }
  
 console.log(formatMessage(motivationMessage));