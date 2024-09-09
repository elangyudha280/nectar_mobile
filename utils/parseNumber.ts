const formatToUSD = (val:any) : string|number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val);
  };

export {formatToUSD};