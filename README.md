# Vulto

Um bloco visual simples para mostrar enquanto o conteúdo de um app React Native está carregando.

O Vulto cuida da forma do placeholder. Seu app continua no controle dos dados, do estado de carregamento e da mensagem que informa à pessoa que o conteúdo está chegando.

## Status

O pacote ainda está em desenvolvimento e não foi publicado no npm. A API pode mudar antes da primeira versão estável.

## Experimente no Expo

O app em [`example/`](./example/README.md) mostra a primitive em uma tela de perfil e cartão. Use os controles para alternar entre placeholders e conteúdo real e para ligar a pulsação.

```sh
cd example
npm install
npm start
```

Escaneie o QR code com o Expo Go 58. O computador e o celular precisam estar na mesma rede Wi-Fi.

## Uso

Quando o pacote estiver publicado, instale com `npm install vulto-skeleton-native`.

```tsx
import { View } from 'react-native';
import { Skeleton } from 'vulto-skeleton-native';

function PerfilCarregando() {
  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Skeleton width={56} height={56} radius={28} />
      <View style={{ flex: 1, gap: 8 }}>
        <Skeleton width="72%" height={16} />
        <Skeleton width="48%" height={12} />
      </View>
    </View>
  );
}
```

## Propriedades

| Propriedade | Tipo | Padrão | Para que serve |
| --- | --- | --- | --- |
| `width` | `ViewStyle['width']` | `'100%'` | Largura do bloco |
| `height` | `ViewStyle['height']` | `16` | Altura do bloco |
| `radius` | `ViewStyle['borderRadius']` | `4` | Arredondamento dos cantos |
| `color` | `ViewStyle['backgroundColor']` | `'#E5E7EB'` | Cor do bloco |
| `animation` | `'none' \| 'pulse'` | `'none'` | Aparência parada ou pulsação |
| `duration` | `number` | `900` | Duração de cada etapa da pulsação, em milissegundos |
| `style` | `ViewStyle` | — | Estilos adicionais do React Native |
| `testID` | `string` | — | Identificador para testes no app que usa o pacote |

## Animação e temas

A animação começa desligada. Para ativar a pulsação, use `animation="pulse"`. Ela respeita a preferência do sistema por movimento reduzido.

Não há provider nem tema global. Passe `color` ou `style` em cada forma, usando as cores que seu app já aplica ao tema atual. O modo `shimmer` não faz parte desta versão.

## Uso em listas

O Vulto não substitui nem configura sua lista. Você pode renderizar a primitive no `renderItem` da lista que o app já usa, como `FlatList` ou `FlashList`:

```tsx
<FlatList
  data={[0, 1, 2]}
  keyExtractor={(item) => String(item)}
  renderItem={() => <Skeleton height={18} style={{ marginVertical: 8 }} />}
/>
```

O pacote não inclui helpers de lista nem componentes prontos de avatar, texto ou cartão.

## Acessibilidade

As formas são decorativas e ficam ocultas para leitores de tela. A tela do app deve comunicar o carregamento com seu próprio texto ou anúncio acessível.

## Licença

MIT. Consulte [LICENSE](./LICENSE).

English: [README.en.md](./README.en.md).
