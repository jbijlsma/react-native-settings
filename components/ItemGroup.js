import Item from "./Item";

import SingleSelectSetting from "./items/SingleSelectSetting";
import SingleSelectOptionItem from "./items/SingleSelectOptionItem";
import UnknownItem from "./items/UnknownItem";
import SettingPageLink from "./items/SettingPageLink";

function ItemGroup({
  items,
  itemKeyExtractor,
  marginLeft,
  isOptionSelected,
  onPress,
}) {
  const numberOfItems = items.length;
  const lastItemIndex = items.length - 1;

  function createItemImplemenation(item) {
    switch (item.type) {
      case "SettingPageLink":
        return <SettingPageLink setting={item} />;
      case "SingleSelectSetting":
        return <SingleSelectSetting setting={item} />;
      case "SingleSelectOptionItem":
        const isSelected = isOptionSelected(item);
        return (
          <SingleSelectOptionItem
            setting={item}
            isSelected={isSelected}
          />
        );
      default:
        return <UnknownItem item={item} />;
    }
  }

  function onPressHandler(item) {
    onPress(item);
  }

  return items.map((item, index) => {
    const hasPrevSibbling = numberOfItems > 0 && index > 0;
    const hasNextSibbling = numberOfItems > 0 && index < lastItemIndex;

    return (
      <Item
        key={itemKeyExtractor(item)}
        item={item}
        marginLeft={marginLeft}
        index={index}
        hasPrevSibbling={hasPrevSibbling}
        hasNextSibbling={hasNextSibbling}
        onPress={() => onPressHandler(item)}
      >
        {createItemImplemenation(item)}
      </Item>
    );
  });
}

export default ItemGroup;
