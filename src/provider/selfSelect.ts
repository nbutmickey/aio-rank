import {Dispatch, createContext} from 'react';

export interface TokenDto {
  id: number;
  index: number;
  token: string;
  name: string;
  icon: string;
  price: string;
  priceUS: string;
  '1H': string;
  '24H': string;
  '7D': string;
  volume: string;
  marketCap: string;
  tokenIcon: string;
  tokenPrice: string;
  marketCapFM: string;
  volumeFM: string;
}

export interface NFTDto {
  '1H': string;
  '7D': string;
  '24H': string;
  icon: string;
  id: number;
  increase: string;
  index: number;
  marketCap: string;
  marketCapUS: string;
  name: string;
  price: string;
  priceUS: string;
  token: string;
  unit: string;
  volume: string;
  volumeUS: string;
}

export interface SelfSelectContextStateType {
  token: TokenDto[],
  nft: NFTDto[],
}

export interface SelfSelectContextType {
  state: SelfSelectContextStateType,
  dispatch: {
    token: Dispatch<{
      type: string;
      item?: TokenDto;
      list?: TokenDto[];
    }>,
    nft: Dispatch<{
      type: string;
      item?: NFTDto;
      list?: NFTDto[];
    }>
  },
}

export const SelfSelectContext = createContext<SelfSelectContextType>({
  state: {
    token: [],
    nft: [],
  },
  dispatch: {
    token: () => {
      throw Error('SelfSelectContext 未定义')
    },
    nft: () => {
      throw Error('SelfSelectContext 未定义')
    }
  }
})

export const selfSelectTokenReducer = (state: TokenDto[], action: { type: string, item?: TokenDto, list?: TokenDto[]}): TokenDto[] => {
  switch (action.type) {
    case 'init':
      return action.list ?? [];
    case 'add':
      if (action.item) {
        return [...state, action.item]
      }
      return state
    case 'remove':
      return state.filter((e) => e.id !== action.item?.id)
    default:
      return state
  }
}

export const selfSelectNFTReducer = (state: NFTDto[], action: { type: string, item?: NFTDto, list?: NFTDto[]}): NFTDto[] => {
  switch (action.type) {
    case 'init':
      return action.list ?? [];
    case 'add':
      if (action.item) {
        return [...state, action.item]
      }
      return state
    case 'remove':
      return state.filter((e) => e.id !== action.item?.id)
    default:
      return state
  }
}
