export const getFeatureCount = (data, category) => {
  if (category === 'all') {
    return data.features.length;
  } else {
    return data.features.filter(
      (feature) => feature.properties.category === category
    ).length;
  }
};

export const getFeaturesSummary = (data) => {
  const categories = [
    'corruption',
    'vandalism',
    'drugUse',
    'robbery',
    'burglary'
  ];
  let summary = [];
  categories.forEach((category) => {
    const value = getFeatureCount(data, category);
    summary.push({ name: category.toUpperCase(), value: value });
  });
  return summary;
};

// export const getFeatureCountLast24Hours = (data, category) => {
//   if (category === 'all') {
//     return data.features.length;
//   } else {
//     return data.features.filter(
//       (feature) => feature.properties.category === category
//     ).length;
//   }
// };
