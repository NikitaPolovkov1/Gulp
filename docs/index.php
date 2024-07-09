<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
    <nav class="nav header__nav" aria-label="Главное">
        <ul class="header__list">
            <?

            $exclude = [
                '/company/',
                '/by/company/',
                '/en/company/',
            ];
            $previousLevel = 0;

            foreach($arResult as $arItem):?>

            <?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
                <?=str_repeat("</div></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));?>
            <?endif?>

            <?if ($arItem["IS_PARENT"]):?>

            <?if ($arItem["DEPTH_LEVEL"] == 1 && !in_array($arItem["LINK"], $exclude)):?>
            <li class="header__item header__item-dropdown">
                <a href="<?=$arItem["LINK"]?>" class="btn btn--accent header__link" aria-expanded='false'
                   aria-controls='company_dropdown'>
					<span class="btn__text ">
						<?=$arItem["TEXT"]?>
					</span>
                </a>
                <div class="header-dropdown " id='company_dropdown'>
                    <?elseif ($arItem["DEPTH_LEVEL"] == 1):?>
                    <li class="header__item header__item-dropdown">
				<span class="btn btn--accent header__link" aria-expanded='false'
                      aria-controls='company_dropdown'>
					<span class="btn__text ">
						<?=$arItem["TEXT"]?>
					</span>
				</span>
                        <div class="header-dropdown " id='company_dropdown'>
                            <?else:?>
                            <li class="header__item header__item-dropdown">
                                <a href="<?=$arItem["LINK"]?>" class="btn btn--accent header__link" aria-expanded='false'
                                   aria-controls='company_dropdown'>
					<span class="btn__text ">
					  <?=$arItem["TEXT"]?>
					</span>
                                </a>
                                <div class="header-dropdown " id='company_dropdown'>
                                    <?endif?>

                                    <?else:?>

                                        <?if ($arItem["PERMISSION"] > "D"):?>

                                            <?if ($arItem["DEPTH_LEVEL"] == 1):?>
                                                <li class="header__item">
                                                    <a href="<?=$arItem["LINK"]?>" class="btn btn--accent header__link">
                                                        <span class="btn__text "><?=$arItem["TEXT"]?></span>
                                                    </a>
                                                </li>
                                            <?else:?>
                                                <a href="<?=$arItem["LINK"]?>" class="btn header-dropdown__link">
                                                    <span class="btn__text "><?=$arItem["TEXT"]?></span>
                                                    <svg class="icon btn__icon header-dropdown__icon" aria-hidden="true">
                                                        <use href="<?=SITE_TEMPLATE_PATH?>/assets/sprites/sprite-mono.svg#arrow-right"></use>
                                                    </svg>
                                                </a>
                                            <?endif?>

                                        <?else:?>

                                            <?if ($arItem["DEPTH_LEVEL"] == 1):?>
                                                <li><a href="" class="<?if ($arItem["SELECTED"]):?>root-item-selected<?else:?>root-item<?endif?>" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"><?=$arItem["TEXT"]?></a></li>
                                            <?else:?>
                                                <li><a href="" class="denied" title="<?=GetMessage("MENU_ITEM_ACCESS_DENIED")?>"><?=$arItem["TEXT"]?></a></li>
                                            <?endif?>

                                        <?endif?>

                                    <?endif?>

                                    <?$previousLevel = $arItem["DEPTH_LEVEL"];?>

                                    <?endforeach?>

                                    <?if ($previousLevel > 1)://close last item tags?>
                                        <?=str_repeat("</div></li>", ($previousLevel-1) );?>
                                    <?endif?>

        </ul>
    </nav>
<?endif?>