import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 60
  },
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 16,
    padding: 10,
    flexDirection: 'row', // Para alinhar a imagem e o conteúdo horizontalmente
    alignItems: 'flex-start', // Para alinhar o nome da empresa com o topo da logo
  },
  logo: {
    width: 80, // Largura da logo
    height: 80, // Altura da logo
    borderRadius: 10,
    marginRight: 10, // Espaçamento entre a logo e o conteúdo
  },
  info: {
    flex: 1, // Para o conteúdo se expandir e ocupar o restante do espaço disponível
  },
  nomeEmpresa: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 0, 
  },
  avaliacaoContainer: {
    marginTop: 12,
    flexDirection: 'column', // Alterado para column
    alignItems: 'flex-start', // Alinhado à esquerda
  },
  avaliacaoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    backgroundColor: '#543EDC',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  vendasContainer: {
    marginTop: 12,
  },
  vendasText: {
    fontSize: 12,
    color: '#808080',
  },
});
