CREATE TABLE `tipoSegmento` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(30) NOT NULL,
	`dataCriacao` TIMESTAMP,
	`dataAlteracao` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `grupoComponente` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(30) NOT NULL,
	`dataCriacao` TIMESTAMP,
	`dataAlteracao` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `componenteSolar` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(200) NOT NULL,
	`altura` FLOAT,
	`largura` FLOAT,
	`profundidade` FLOAT,
	`dataCriacao` TIMESTAMP,
	`dataAlteracao` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE `componenteSolar` ADD idSegmento int AFTER `dataAlteracao`;
ALTER TABLE `componenteSolar` ADD idGrupoComponente int AFTER `idSegmento`;
ALTER TABLE `componenteSolar` ADD pesobruto FLOAT AFTER `idGrupoComponente`;
ALTER TABLE `componenteSolar` ADD pesoLiquido FLOAT AFTER `pesobruto`;

ALTER TABLE `componenteSolar` ADD CONSTRAINT `fk_tipo_segmento` FOREIGN KEY ( idSegmento ) REFERENCES `tipoSegmento` ( `id` ) ;
ALTER TABLE `componenteSolar` ADD CONSTRAINT `fk_grupo_componente` FOREIGN KEY ( idGrupoComponente ) REFERENCES `grupoComponente` ( `id` ) ;


