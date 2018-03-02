export default class ContactItem extends Component {
    const picsrc = props.firstname.toLowerCase() + ".jpeg";
    const imgurl = `http://web.sit.kmutt.ac.th/sanit/int493/contacts/img/${picsrc}`;
    render(){
    return (
      <View style={styles.row}>
        <Image style={styles.picture} source={{ uri: `${imgurl}` }} />
        <View>
          <Text>
            {this.props.prefix}
            <Text>{props.firstname} </Text>
            {props.lastname}
          </Text>
          <Text>Tel: {props.phone}</Text>
          <Text>Email: {props.email}</Text>
        </View>
      </View>
    );
  }};

