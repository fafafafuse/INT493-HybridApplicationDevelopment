_renderContact = ({item}) => {
    const picsrc = item.firstname.toLowerCase()+'.jpeg';
    const imgurl = `http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/${picsrc}`;
    return (
      <View style={styles.row}>
      <Image style={styles.picture} source={{uri:`${imgurl}`}}/>
      <Text>{item.firstname}</Text>
      <Text>{item.lastname}</Text>
      </View>
    )
  }