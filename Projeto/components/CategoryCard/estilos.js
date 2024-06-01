import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  cardBackground: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImageBackground: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'rgba(242, 242, 242, 0)', 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '58%', 
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
});